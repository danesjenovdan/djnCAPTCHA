(function () {
  const me = document.currentScript;
  // const form = me.closest("form");
  // const submit = form.querySelector('button[type="submit"]');

  let container = null;
  if (
    me.previousElementSibling &&
    me.previousElementSibling.tagName === "DIV" &&
    me.previousElementSibling.id === "djncaptcha"
  ) {
    container = me.previousElementSibling;
  } else {
    container = document.createElement("div");
    container.id = "djncaptcha";
    me.parentNode.insertBefore(container, me);
  }

  const iframe = document.createElement("iframe");
  iframe.style.display = "block";
  iframe.style.width = "332px";
  iframe.style.height = "185px";
  iframe.style.backgroundColor = "transparent";
  iframe.style.border = "0";
  container.appendChild(iframe);

  iframe.addEventListener("load", () => {
    const doc = iframe.contentWindow.document;
    doc.body.style.margin = "0";

    const wrapper = doc.createElement("div");
    wrapper.style.boxSizing = "border-box";
    wrapper.style.display = "flex";
    wrapper.style.padding = "10px";
    wrapper.style.backgroundColor = "white";
    wrapper.style.border = "1px solid #ccc";
    wrapper.style.borderRadius = "5px";
    doc.body.appendChild(wrapper);

    const imgContainer = doc.createElement("div");
    imgContainer.style.flex = "0 0 250px";
    wrapper.appendChild(imgContainer);

    const buttonsContainer = doc.createElement("div");
    buttonsContainer.style.boxSizing = "border-box";
    buttonsContainer.style.flex = "0 0 60px";
    buttonsContainer.style.display = "flex";
    buttonsContainer.style.flexDirection = "column";
    buttonsContainer.style.justifyContent = "space-around";
    buttonsContainer.style.paddingLeft = "10px";
    wrapper.appendChild(buttonsContainer);

    const img = doc.createElement("img");
    img.style.width = "250px";
    img.style.height = "125px";
    img.src = "data:image/png;base64,";
    img.alt = "CAPTCHA Loading ...";
    imgContainer.appendChild(img);

    const inputForm = doc.createElement("form");
    inputForm.style.display = "flex";
    inputForm.style.margin = "10px 0 0 0";
    imgContainer.appendChild(inputForm);

    const input = doc.createElement("input");
    input.type = "text";
    input.value = "";
    input.style.boxSizing = "border-box";
    input.style.width = "100%";
    input.style.padding = "0 6px";
    input.style.backgroundColor = "white";
    input.style.border = "1px solid #333";
    input.style.fontFamily = "monospace";
    input.style.fontSize = "18px";
    input.style.fontWeight = "bold";
    input.style.height = "28px";
    input.style.lineHeight = "28px";
    inputForm.appendChild(input);

    const submit = doc.createElement("button");
    submit.type = "submit";
    submit.style.flex = "0 0 28px";
    submit.style.boxSizing = "border-box";
    submit.style.position = "relative";
    submit.style.padding = "0";
    submit.style.marginLeft = "-1px";
    submit.style.background = "transparent";
    submit.style.border = "1px solid #333";
    submit.style.height = "28px";
    submit.style.cursor = "pointer";
    {
      const span = doc.createElement("span");
      span.textContent = "Verify Captcha";
      span.style.display = "block";
      span.style.textIndent = "-9999px";
      submit.appendChild(span);
      const icon = doc.createElement("div");
      icon.style.position = "absolute";
      icon.style.inset = "4px";
      icon.style.color = "#000";
      icon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
          <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
        </svg>
      `;
      submit.appendChild(icon);
    }
    inputForm.appendChild(submit);

    function createButton(text, svg) {
      const button = doc.createElement("button");
      button.type = "button";
      button.style.boxSizing = "border-box";
      button.style.position = "relative";
      button.style.width = "50px";
      button.style.height = "50px";
      button.style.padding = "0";
      button.style.background = "transparent";
      button.style.border = "1px solid #333";
      button.style.borderRadius = "50%";
      button.style.cursor = "pointer";
      const span = doc.createElement("span");
      span.textContent = text;
      span.style.display = "block";
      span.style.textIndent = "-9999px";
      button.appendChild(span);
      const icon = doc.createElement("div");
      icon.style.position = "absolute";
      icon.style.inset = "8px";
      icon.style.color = "#000";
      icon.innerHTML = svg;
      button.appendChild(icon);
      return button;
    }

    const refresh = createButton(
      "Refresh",
      `
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
          <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
        </svg>
      `
    );
    refresh.disabled = true;
    refresh.style.opacity = "0.5";
    refresh.style.cursor = "not-allowed";
    buttonsContainer.appendChild(refresh);

    const audio = createButton(
      "Audio",
      `
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5z"/>
        </svg>
      `
    );
    // TODO: enable audio fallback
    audio.disabled = true;
    audio.style.opacity = "0.5";
    audio.style.cursor = "not-allowed";
    buttonsContainer.appendChild(audio);

    function insertCaptchaImage(data) {
      img.src = `data:image/png;base64,${data.captchaImg}`;
      img.dataset.captchaId = data.captchaId;
      img.alt = "CAPTCHA";
      input.value = "";
      refresh.disabled = false;
      refresh.style.opacity = "1";
      refresh.style.cursor = "pointer";
    }

    refresh.addEventListener("click", function () {
      refresh.disabled = true;
      refresh.style.opacity = "0.5";
      const previousCaptchaId = img.dataset.captchaId;
      fetch(`/api/reloadCaptchaImg/${previousCaptchaId}?locale=en-GB`)
        .then((response) => response.json())
        .then((data) => {
          insertCaptchaImage(data);
        });
    });

    inputForm.addEventListener("submit", function (event) {
      event.preventDefault();
      submit.disabled = true;
      const captchaId = img.dataset.captchaId;
      const captchaAnswer = input.value;
      fetch(
        `/api/validateCaptcha/${captchaId}?captchaAnswer=${captchaAnswer}`,
        { method: "POST" }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.responseCaptcha === "success") {
            console.log("success");
          } else {
            console.log("fail");
          }
          submit.disabled = false;
        });
    });

    fetch("/api/captchaImg?locale=en-GB")
      .then((response) => response.json())
      .then((data) => {
        insertCaptchaImage(data);
      });
  });
})();
