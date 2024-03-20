import { CustomerReviews, Footer, Hero, PopularProducts,
   Services, SpecialOffer, Subscribe, SuperQuality } from "./Sections"
import Navbar from "./components/Navbar"

const App = ()=>(
  <main className="relative">
    <Navbar/>
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero/>

    </section>
    <section className="padding">
      <PopularProducts/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding-x py-10">
      <SpecialOffer/>
    </section>
    <section className="padding-x py-10">
      <CustomerReviews />
    </section>
    <section className="padding-x py-10">
      <Subscribe />
    </section>
    <section className="padding-x py-10">
      <Footer/>
    </section>

  </main>
)

export default App
