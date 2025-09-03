import book from "../data/book";

export default function Highlights() {
  return (
    <ul className="space-y-4">
      {book.highlights.map((point, index) => (
        <li key={index} className="flex items-start">
          <span className="text-green-600 text-xl mr-3">✔</span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}
