import { ServiceCard, Title } from "@/components";

const Home = () => {
  return (
    <div>
      <section className='primary'>
        <Title title='A propos' />
        <p className='mt-14'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at
          vestibulum diam, <strong>ut dictum risus</strong>. Vivamus accumsan
          nibh eget nibh pretium tincidunt. Sed ipsum libero, scelerisque vel
          ligula et, gravida sollicitudin ex. Etiam id rhoncus risus.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at
          vestibulum diam, ut dictum risus. Vivamus accumsan nibh eget nibh
          pretium tincidunt. Sed ipsum libero, scelerisque vel ligula et,
          gravida sollicitudin ex. Etiam id rhoncus risus.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at
          vestibulum diam, ut dictum risus. Vivamus accumsan nibh eget nibh
          pretium tincidunt. Sed ipsum libero, scelerisque vel ligula et,
          gravida sollicitudin ex. Etiam id rhoncus risus.
          <br />
          <br />
          Vestibulum condimentum, nunc convallis sollicitudin iaculis, magna
          lorem tincidunt metus, ac gravida ex felis quis elit. Mauris aliquet
          massa eget interdum cursus. Ut semper turpis ut justo condimentum, non
          pellentesque dolor faucibus. Fusce et dapibus justo. In hac habitasse
          platea dictumst. Nunc turpis lorem, venenatis non rhoncus id,
          imperdiet id erat. Mauris lorem urna, vehicula sed eros ac, dapibus
          bibendum turpis. Suspendisse sagittis ullamcorper elit eget fringilla.
          <br />
          <br />
          Vestibulum condimentum, nunc convallis sollicitudin iaculis, magna
          lorem tincidunt metus, ac gravida ex felis quis elit. Mauris aliquet
          massa eget interdum cursus. Ut semper turpis ut justo condimentum, non
          pellentesque dolor faucibus. Fusce et dapibus justo. In hac habitasse
          platea dictumst. Nunc turpis lorem, venenatis non rhoncus id,
          imperdiet id erat. Mauris lorem urna, vehicula sed eros ac, dapibus
          bibendum turpis. Suspendisse sagittis ullamcorper elit eget fringilla.
        </p>
      </section>

      <section className='secondary'>
        <Title title='Services' />

        <div
          className='flex flex-wrap justify-between mt-14'
          style={{ gap: 44 }}>
          <ServiceCard
            firstIcon='next'
            secondIcon='react'
            title='Frontend JS'
            subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id justo tortor. Aenean vel ante ut tellus tempus tempus.'
          />
          <ServiceCard
            firstIcon='adonis'
            secondIcon='nest'
            title='Backend JS'
            subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id justo tortor. Aenean vel ante ut tellus tempus tempus.'
          />
          <ServiceCard
            firstIcon='laravel'
            title='Backend Laravel'
            subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id justo tortor. Aenean vel ante ut tellus tempus tempus.'
          />
          <ServiceCard
            firstIcon='wordpress'
            title='Wordpress'
            subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id justo tortor. Aenean vel ante ut tellus tempus tempus.'
          />
          <ServiceCard
            firstIcon='teacher'
            title='Formations'
            subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id justo tortor. Aenean vel ante ut tellus tempus tempus.'
          />
          <ServiceCard
            firstIcon='figma'
            title='Design UX/UI'
            subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id justo tortor. Aenean vel ante ut tellus tempus tempus.'
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
