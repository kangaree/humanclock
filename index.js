document.addEventListener("DOMContentLoaded", () => {
  const updateView = () => {
    const now = new Date();
    const seconds = now.getSeconds();

    if (seconds === updateView.lastSec) return;
    updateView.lastSec = seconds;

    const [hour, minute] = [now.getHours(), now.getMinutes()].map((n) =>
      String(n).padStart(2, "0")
    );
    const [s1, s2] = String(seconds).padStart(2, "0").split("");

    const updateElement = (elemId, newValue, shorthand) => {
      const elem = document.getElementById(elemId);
      const newUrl = `/img/${shorthand + newValue}.gif`;
      if (newValue !== elem.alt) {
        elem.src = newUrl;
        elem.alt = newValue;
      }
    };

    updateElement("hour1", hour[0], "h");
    updateElement("hour2", hour[1], "hh");
    updateElement("minute1", minute[0], "m");
    updateElement("minute2", minute[1], "mm");
    updateElement("second1", s1, "s");
    updateElement("second2", s2, "ss");
  };

  setInterval(updateView, 1000);
});
