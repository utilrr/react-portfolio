import React from "react";
import "../App.css";

const Contact = () => {
  return (
    <div>
      Contact
      <h1>I reside in Raleigh, NC</h1>
      <p>
        <ul>
          <li>
            Phone:
            <a
              href="tel:919-210-7611"
              title="Please leave me a message."
              target="_blank"
              rel="noreferrer"
            >
              919.210.7611
            </a>
          </li>
          <li>
            Email:
            <a
              href="mailto:gmarkghealy@gmail.com"
              title="Send me a message."
              target="_blank"
              rel="noreferrer"
            >
              gmarkghealy@gmail.com
            </a>
          </li>
          <li>
            GitHub:
            <a
              href="https://github.com/utilrr"
              title="Send me a message."
              target="_blank"
              rel="noreferrer"
            >
              github.com/utilrr
            </a>
          </li>
          <li>
            MixCloud:
            <a
              href="https://www.mixcloud.com/utilrr/"
              title="I once had a radio show."
              target="_blank"
              rel="noreferrer"
            >
              mixcloud.com/utilrr
            </a>
          </li>
          <li>
            Twitter:
            <a
              href="https://twitter.com/MarkJHealy"
              title="Be warned, I have opinions you may not agree with."
              target="_blank"
              rel="noreferrer"
            >
              @MarkJHealy
            </a>
          </li>
        </ul>
      </p>
    </div>
  );
};

export default Contact;
