import { SectionTitle } from '../Common/SectionTitle';

const oemCustomers = [
  'Ford', 'GM', 'Stellantis', 'BMW', 'Mercedes-Benz', 
  'Honda', 'Acura', 'Toyota', 'Nissan'
];

const tier1Customers = [
  'Magna', 'Brose', 'Fisher Dynamics', 'Schukra', 
  'Kirchhoff Automotive', 'Benteler', 'Toyo Seat', 
  'Linamar', 'Grand Rapids Controls', 'AGS Automotive', 
  'Flex-N-Gate', 'Martinrea', 'Midway Products'
];

export const Customers = () => {
  return (
    <section className="py-24 bg-slate-50" data-testid="customers-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Trusted by Industry Leaders"
          subtitle="Supplying components to the world's most demanding automotive manufacturers"
        />
        
        {/* OEM Customers */}
        <div className="mb-16">
          <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
            OEM Customers
          </h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {oemCustomers.map((customer, index) => (
              <div 
                key={index}
                className="font-serif text-xl md:text-2xl font-semibold text-gray-400 hover:text-primary transition-colors cursor-default"
              >
                {customer}
              </div>
            ))}
          </div>
        </div>
        
        {/* Tier 1 Customers */}
        <div>
          <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
            Tier 1 Customers
          </h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {tier1Customers.map((customer, index) => (
              <div 
                key={index}
                className="font-sans text-base md:text-lg font-medium text-gray-400 hover:text-primary transition-colors cursor-default"
              >
                {customer}
              </div>
            ))}
          </div>
        </div>
        
        {/* Platforms */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">Currently Supplying Major OEM Flagship Vehicles</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Silverado', 'F150', 'Dodge Ram', 'X5', 'X7', 'RAV4', 'Sienna', 'Bronco', 'Expedition', 'Jeep Wrangler'].map((vehicle, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white rounded-full text-sm text-primary border border-slate-200 shadow-sm"
              >
                {vehicle}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
