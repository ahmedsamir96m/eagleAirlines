function App() {
  return (
    <div id="EagleAirlines" className="EagleAirlines">

      {/* Header */}
      <header>

        {/* logo */}
        <div className="logo">
          Logo
        </div>

        {/* Navigation */}
        <nav className="navigation">
          {/* Search */}
          <div className="searchbar">
            Search
          </div>
          {/* Nav Items */}
          <ul>
            <li>
              <button>Lang</button>
            </li>
            <li>
              <button>Login</button>
            </li>
            <li>
              <button>Sign Up</button>
            </li>
          </ul>
          {/* Burger Menu */}
          <ul>
            B-Menu
          </ul>
        </nav>
      </header>

    {/* Hero Section */}
    <section id="heroSec">
      Book / Flight Status / Time Table / My Trips
    </section>

    {/* Offers */}
    <section id="offers">
      Best Offers
    </section>

    {/* Service */}
    <section id="services">
      Our Services
    </section>

    {/* Before You Fly */}
    <section id="beforeFly">
      Before You Fly
    </section>

    {/* Social */}
    <section id="social">
      Follow Us
    </section>

    {/* Footer */}
    <footer id="footer">
      Footer
    </footer>
    </div>
  );
}

export default App;
