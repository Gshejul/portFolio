import styles from './ContactStyles.module.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

   
    emailjs.sendForm('service_tgah48p', 'template_dps5bjk', form.current, {
        publicKey: '-RScIbcDvYjq25V_A',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };


  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      
      
        {/* <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" /> */}

        <form ref={form} onSubmit={sendEmail}>
          <div className="formGroup">
              <input type="text" name='user_name' placeholder='Your Full Name' required/>
          </div>
          <div className="formGroup">
              <input type="email" name='user_email' placeholder='Your Email' required/>
          </div>
          <div className="formGroup">
              <textarea name="message" placeholder='Message' required></textarea>
          </div>
          <input className="hover btn" type="submit" value="Submit" />
      </form>
      
    </section>
  );
}

export default Contact;
