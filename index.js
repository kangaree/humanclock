document.addEventListener("DOMContentLoaded", () => {
  const updateView = () => {
    const now = new Date();
    const seconds = now.getSeconds();

    if (seconds === updateView.lastSec) {
      requestAnimationFrame(updateView);
      return;
    }
    updateView.lastSec = seconds;

    const [hour, minute] = [now.getHours(), now.getMinutes()].map((n) =>
      String(n).padStart(2, "0")
    );
    const [s1, s2] = String(seconds).padStart(2, "0").split("");

    const updateElement = (elemId, newValue) => {
      const elem = document.getElementById(elemId);

      let className = elem.classList.contains("intro")
        ? `t-${newValue}-intro`
        : `t-${newValue}`;

      // The first minute and second digits roll over from 5 to 0
      if ((elemId === "minute1" || elemId === "second1") && newValue === "0") {
        className = "ms-0";
      // The first hour digit rolls over from 2 to 0
      } else if (elemId === "hour1" && newValue === "0") {
        className = "h-0";
      }

      if (elem.getAttribute("data-number") !== newValue) {
        elem.setAttribute("data-number", newValue);
        elem.className = "";
        elem.classList.add(className, "character");
      }
    };

    updateElement("hour1", hour[0]);
    updateElement("hour2", hour[1]);
    updateElement("minute1", minute[0]);
    updateElement("minute2", minute[1]);
    updateElement("second1", s1);
    updateElement("second2", s2);

    requestAnimationFrame(updateView);
  };

  setTimeout(() => {
    requestAnimationFrame(updateView);
  }, 1000);
});
