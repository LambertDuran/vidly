import Raven from "raven-js";

function init() {
  Raven.config(
    "https://1543b89fe7bb45f8ab4a2f963932895a@o1357260.ingest.sentry.io/6643668",
    {
      release: "1-0-0",
      environment: "development-test",
    }
  ).install();
}

function log(error) {
  Raven.captureException(error);
}

const Logger = {
  init,
  log,
};

export default Logger;
