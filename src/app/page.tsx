import Card from '@/components/organisms/Card/index';
import Header from '@/components/organisms/Header/index';
import StatsPanel from '@/components/organisms/StatsPanel/index';

export default function Home() {
  // Data for the cards, could also be fetched from an API
  const cardsData = [
    { title: 'Super lucky strike', details: 'Details here' },
    { title: 'Not so Lucky strike', details: 'Some details' }
  ];

  return (
    <div className="bg-white h-screen">
      <Header/>

      <main className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <section className="mb-10">
            <StatsPanel/>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Listings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cardsData.map((card, index) => (
                <Card key={index} title={card.title} details={card.details} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
