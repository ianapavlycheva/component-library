import './App.css'
import { Badge, Banner, Card, Testimonial } from './index.jsx';
// import "my-component-library/dist/index.css"; // Import styles

function App() {
  return (
    <>
        <h1>Component Library</h1>
        <h2>Badges</h2>

      <div>
        <Badge text="Badge" color="gray" shape="square"/>
        <Badge text="Badge" color="red" />
        <Badge text="Badge" color="yellow" />
        <Badge text="Badge" color="green" />
        <Badge text="Badge" color="blue" />
        <Badge text="Badge" color="indigo" />
        <Badge text="Badge" color="purple" />
        <Badge text="Badge" color="pink" />
      </div>

      <div>
      <Badge text="Badge" color="gray" shape="pill" />
      <Badge text="Badge" color="red" shape="pill" />
      <Badge text="Badge" color="yellow" shape="pill" />
      <Badge text="Badge" color="green" shape="pill" />
      <Badge text="Badge" color="blue" shape="pill" />
      <Badge text="Badge" color="indigo" shape="pill" />
      <Badge text="Badge" color="purple" shape="pill" />
      <Badge text="Badge" color="pink" shape="pill" />
      </div>
      <Banner message="This is an alert!" type="danger" />
      <Card title="Card Title" description="This is a card" variant="elevated" />
      <Testimonial name="Jane Doe" feedback="This is amazing!" type="quote" />

      <h2>Banners</h2>

      <h2>Cards</h2>
      <h2>Testimonials</h2>
      <h2>Tooltip Component</h2>
      <h2>Toast Popup</h2>
    </>
  )
}

export default App
