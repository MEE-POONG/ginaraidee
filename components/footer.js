import { BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="fixed left-0 right-0 bottom-0 bg-white p-5 bg-gray-500">
      <div>
        <strong className="font-bold">La protection de votre vie privée est importante</strong>
        <p className="text-sm">Nous utilisons des cookies et des technologies similaires pour que votre visite de notre site web soit la plus agréable possible.
          <a className="underline" href="" target="_blank">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}
