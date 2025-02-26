import './App.css'
import { Badge, Banner, Card, Testimonial } from './index.jsx';
// import "my-component-library/dist/index.css"; // Import styles

function App() {
  return (
    <>
        <h1>Component Library</h1>
        <h2>Badges</h2>

      <div className='badges'>
        <Badge text="Badge" color="gray" shape="square"/>
        <Badge text="Badge" color="red" shape="square"/>
        <Badge text="Badge" color="yellow" shape="square"/>
        <Badge text="Badge" color="green" shape="square"/>
        <Badge text="Badge" color="blue" shape="square"/>
        <Badge text="Badge" color="indigo" shape="square"/>
        <Badge text="Badge" color="purple" shape="square"/>
        <Badge text="Badge" color="pink" shape="square"/>
      </div>

      <div className='badges'>
      <Badge text="Badge" color="gray" shape="pill" />
      <Badge text="Badge" color="red" shape="pill" />
      <Badge text="Badge" color="yellow" shape="pill" />
      <Badge text="Badge" color="green" shape="pill" />
      <Badge text="Badge" color="blue" shape="pill" />
      <Badge text="Badge" color="indigo" shape="pill" />
      <Badge text="Badge" color="purple" shape="pill" />
      <Badge text="Badge" color="pink" shape="pill" />
      </div>



      <h2>Banners</h2>
      <div>
      <Banner icon="mdi mdi-check-circle" header="Congratulations!" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." type="success" />
      <Banner icon="mdi mdi-alert" header="Attention" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum." type="warning" />
      <Banner icon="mdi mdi-close-circle" header="There is a problem with your application" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum." type="error" />
      <Banner icon="mdi mdi-information-variant-circle" header="Update available" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." type="neutral" />
      <Banner icon="mdi mdi-check-circle" header="Congratulations!" message="" type="success" />
      <Banner icon="mdi mdi-alert" header="Attention" message="" type="warning" />
      <Banner icon="mdi mdi-close-circle" header="There is a problem with your application" message="" type="error" />
      <Banner icon="mdi mdi-information-variant-circle" header="Update available" message="" type="neutral" />
      </div>
      <h2>Cards</h2>

      <Card title="Card Title" description="This is a card" variant="elevated" />
      <h2>Testimonials</h2>

      <Testimonial name="Jane Doe" feedback="This is amazing!" type="quote" />
      <h2>Tooltip Component</h2>
      <h2>Toast Popup</h2>
    </>
  )
}

export default App
