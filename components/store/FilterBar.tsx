export const FilterBar = () => (
    <div className="flex space-x-4 mb-8">
      {['All', 'Gear', 'Technology', 'Accessory'].map((cat) => (
        <button
          key={cat}
          className="text-sm font-medium px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100"
        >
          {cat}
        </button>
      ))}
    </div>
  );
  