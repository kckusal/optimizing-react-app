import styled from '@emotion/styled';

const PageContainer = styled.div`
  padding: 20px 30px;

  > h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
  }

  > .callout {
    margin: 4px 0;
    border-left: 6px solid #bbb;
    padding: 8px;
    font-size: 15px;
    background-color: #f7f7f7;
  }
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
`

const Home = () => {
  return (
    <PageContainer>
      <h2>Hello !</h2>

      <p>
        This is an example web application built as part of an experimental
        study to better understand the build stage, particularly module bundling
        with Webpack, in the development lifecycle of a particular React
        application.
      </p>

      <br />

      <p className="callout">
        The app is intentionally made <em>very simple</em> and
        <em> minimalistic</em> so as to avoid the complexity that the design &
        development processes would bring to the study.
      </p>

      <br />
      <br />

      <p>While you are here, enjoy this beautiful landscape.</p>
      <Image src="./assets/images/landscape_800p.jpg" />
    </PageContainer>
  );
};

export default Home;
