import { ServiceCard, TechnologyCard, Title, WorkCard } from "@/components";
import { CSSProperties, useMemo } from "react";
import { technologies } from "@/data/technologies";
import { works } from "@/data/works";

const Home = () => {
  const orderedWorks = useMemo(
    () => works.sort((a, b) => a.order - b.order),
    []
  );

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

      <section
        className='primary px-0'
        style={
          {
            "--technologies-length": technologies.length,
          } as CSSProperties
        }>
        <div className='slider'>
          {technologies.map((technology) => (
            <TechnologyCard key={technology} icon={technology} />
          ))}
          {technologies.map((technology) => (
            <TechnologyCard key={`${technology}-1`} icon={technology} />
          ))}
        </div>
      </section>

      <section className='secondary'>
        <Title title='Réalisations' />

        <div className='grid grid-cols-3 mt-14' style={{ gap: 36 }}>
          {orderedWorks.map((work) => (
            <WorkCard
              key={work.title}
              picture={work.picture}
              color={work.color}
              title={work.title}
              description={work.description}
              fullwidth
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
