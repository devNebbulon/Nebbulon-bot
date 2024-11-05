import { Link } from "react-router-dom";
import "./homepage.css";

const Homepage = () => {
  return (
    // <div className='homepage'>
    //   <img src="/orbital.png" className="orbital" />
    //   <div className="left">
    //     <h1>LAMA AI</h1>
    //     <h2>Supercharge your creativity and productivity</h2>
    //     <h3>
    //       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat sint
    //       dolorem doloribus, architecto dolor.
    //     </h3>
    //     <Link to="/dashboard">Get Started</Link>
    //   </div>
    //   <div className="right">righ</div>
    // </div>
    <div className="homepage">
      {/* <div className="header">
      <header className="header">
            <div className="logo">NEBBULON</div>
            <nav>
                <ul>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#faq">FAQ</a></li>
                </ul>
            </nav>
        </header>
      </div> */}
      <div className="heroSection">
        <section className="hero">
          <h1>Welcome to Nebbulon</h1>
          <p>
            Integrated with ChatGPT 4.0, Claude 3.5 Sonnet, Gemini 1.5 Pro, and
            Llama 3.1 405B. Offering the best conversational AI with cool
            features at a competitive price.
          </p>
          <Link to="/dashboard">Get Started</Link>
        </section>
      </div>
      <div className="featureSection">
        <section className="features" id="features">
          <h2>
            Discover the powerful features that make Nebbulon the ultimate AI
            chatbot.
          </h2>
          <div class="feature-grid">
            <div class="feature">
              <h3>Dual AI Models</h3>
              <p>
                Choose between ChatGPT and Claude for responses tailored to your
                needs.
              </p>
            </div>
            <div class="feature">
              <h3>Flexible Subscription Packs</h3>
              <p>
                Select plans based on character limits— 500,000 or 1,000,000
                characters.
              </p>
            </div>
            <div class="feature">
              <h3>Customizable Themes</h3>
              <p>Personalize your interface with colorful themes</p>
            </div>
            <div class="feature">
              <h3>Enhanced User Experience</h3>
              <p>Enjoy a visually appealing and functional interface.</p>
            </div>
            <div class="feature">
              <h3>Efficient Communication</h3>
              <p>Streamline your interactions with a reliable AI chatbot.</p>
            </div>
            <div class="feature">
              <h3>Versatile Use Cases</h3>
              <p>
                Ideal for coding, education, content creation, and productivity.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="pricingSection">
        <section className="pricing" id="pricing">
          <h2>Pricing</h2>
          <div className="currency-selector">
            <select>
              <option value="INR">INR</option>
              <option value="USD">USD</option>
            </select>
            <select>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
          <div className="pricing-grid">
            <div className="plan">
              <h3>Starter Plan</h3>
              <p>250 INR</p>
              <p>100K Tokens</p>
              <p>Includes All Features</p>
              <button>Buy</button>
            </div>
            <div className="plan">
              <h3>Pro Plan</h3>
              <p>500 INR</p>
              <p>200K Tokens</p>
              <p>Includes All Features</p>
              <button>Buy</button>
            </div>
            <div className="plan">
              <h3>Premium Plan</h3>
              <p>750 INR</p>
              <p>300K Tokens</p>
              <p>Includes All Features</p>
              <button>Buy</button>
            </div>
            <div className="plan">
              <h3>Elite Plan</h3>
              <p>1000 INR</p>
              <p>400K Tokens</p>
              <p>Includes All Features</p>
              <button>Buy</button>
            </div>
          </div>
          <div className="pricing-grid">
            <div className="plan">
              <h3>Starter Plan</h3>
              <p>250 INR</p>
              <p>100K Tokens</p>
              <p>Includes All Features</p>
              <button>Buy</button>
            </div>
            <div className="plan">
              <h3>Pro Plan</h3>
              <p>500 INR</p>
              <p>200K Tokens</p>
              <p>Includes All Features</p>
              <button>Buy</button>
            </div>
            <div className="plan">
              <h3>Premium Plan</h3>
              <p>750 INR</p>
              <p>300K Tokens</p>
              <p>Includes All Features</p>
              <button>Buy</button>
            </div>
            <div className="plan">
              <h3>Elite Plan</h3>
              <p>1000 INR</p>
              <p>400K Tokens</p>
              <p>Includes All Features</p>
              <button>Buy</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
