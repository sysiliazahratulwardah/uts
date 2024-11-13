export function Hero() {
    return (
      <section className="hero">
        <div id='home' className="hero-content">
          <h1>MINUMAN BOBA RAJASU (RAJANYA SUSU)</h1>
          <p>"Selamat datang di Kedai Boba Rajanya Susu, tempat di mana kelezatan susu bertemu dengan kenikmatan boba! Nikmati berbagai varian minuman boba yang kaya rasa, mulai dari susu murni hingga kreasi unik yang menggugah selera."</p>
        </div>
        <div className="hero-image">
          <img src={`${process.env.PUBLIC_URL}/kedai.jpg`} alt="RAJASU (RAJANYA SUSU)" />
        </div>
      </section>
    );
  };
  