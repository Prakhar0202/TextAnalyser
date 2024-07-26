import React from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#165497" : "#928cbb",
    border: "1px solid",
    borderColor: props.mode === "dark" ? "white" : "black",
  };

  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyse your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Easily analyse your text with our intuitive. This feature allows
              you to:
              <br /> Convert Case: Switch between uppercase, lowercase, and
              title case effortlessly.
              <br /> Remove Extra Spaces: Clean up your text by eliminating
              unnecessary spaces.
              <br /> Count Words & Characters: Get instant counts of words and
              characters for precise text management.
              <br /> Live Preview: View real-time changes as you edit to ensure
              accuracy and clarity. Optimize and perfect your content with ease.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Enjoy all the powerful features of Text Analyser completely free
              of charge. No subscriptions, no hidden fees—just straightforward,
              unlimited access to our advanced text editing tools. Transform and
              perfect your text with ease, and experience the full capabilities
              of our app without any cost. This description emphasizes the
              accessibility and no-cost benefit of the application, making it
              clear that users can fully utilize the features without financial
              commitment.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Text Analyser is designed to work seamlessly across all major
              browsers. Whether you’re using Chrome, Firefox, Safari, Edge, or
              any other modern browser, you can enjoy a smooth and consistent
              experience. Access our powerful text editing tools from any device
              with your preferred browser, ensuring flexibility and convenience
              no matter where you are.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
