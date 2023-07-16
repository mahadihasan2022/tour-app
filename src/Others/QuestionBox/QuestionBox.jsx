import React from "react";
import "./QuestionBox.css";

const QuestionBox = () => {
  return (
    <div>
      <div className="question">
        <h1>Frequently Asked Question</h1>
        <div class="question-container">
          <div class="box-container">
            <div class="card-box">
              <div class="card-cardContainer">
                <div class="boxContainer">
                  <details>
                    <summary>
                      What is different between event design & planing?
                    </summary>

                    <span className="font-semibold text-black">
                      Event design encompasses the more creative side of event
                      management. While a planner focuses on organization, we
                      focus on the decor of the event.
                    </span>
                  </details>
                  <details class="mb-4">
                    <summary class="font-bold text-black bg-gray-200 rounded-md py-2 px-4">
                      How early do we need to start planning and event?
                    </summary>

                    <span className="font-semibold text-black">
                      It's never too soon to start! The time to plan events
                      varies from a few weeks to years. If your event is small,
                      you can probably put it together in a month or two.
                    </span>
                  </details>
                  <details class="mb-4">
                    <summary class="font-bold text-black  bg-gray-200 rounded-md py-2 px-4">
                      What is your refund and cancellation policy?
                    </summary>

                    <span className="font-semibold text-black">
                      Refund policy is exactly as it sounds - a policy that
                      dictates the terms of any refunds or returns which may be
                      offered by the website or eCommerce store.
                    </span>
                  </details>

                  <details class="mb-4">
                    <summary class="font-bold text-black  bg-gray-200 rounded-md py-2 px-4">
                      How to keep budgets on track?
                    </summary>

                    <span class="px-4 py-2 font-semibold text-black">
                      How to create a project budget. As a starting point, The
                      Digital Project Manager explains that there are two key
                      types of project budgets
                    </span>
                  </details>
                  <details class="mb-4">
                    <summary class="font-bold text-black  bg-gray-200 rounded-md py-2 px-4">
                      What do I put for shipping policy?
                    </summary>

                    <span class="px-4 py-2 font-semibold text-black">
                      Shipping Policy is where you let your customers know
                      important details about how you ship your goods, such as
                      what shipping services.
                    </span>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionBox;
