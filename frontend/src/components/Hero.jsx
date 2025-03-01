const Hero = () => {
    return (
      <div className="bg-dark py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-accent mb-4">Find Your Next Favorite Book</h2>
          <p className="text-primary mb-8">Get personalized recommendations based on your mood, genre, or favorite authors.</p>
          <button className="bg-accent text-dark px-6 py-2 rounded-full hover:bg-primary transition-colors">
            Get Started
          </button>
        </div>
      </div>
    );
  };
  
  export default Hero;