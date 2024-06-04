import React from 'react';

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <section className="newsletter">
        <h3>subscribe for latest updates</h3>
        <p>Purple Frontier Unipessoal Lda</p>

        <form action="">
          <input type="email" placeholder="enter your email" />
          <input type="submit" value="subscribe" />
        </form>
      </section>
    </div>
  );
};

export default Newsletter;
