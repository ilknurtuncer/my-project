
import { Card } from 'flowbite-react';

import Image from "../assets/image1.jpg"

function Cards() {
  return (
    <Card
      className="max-w-sm"
    >
       <img  
          alt=""
          height="96"
          src={Image}
          width="96"
          className="mb-3 shadow-lg"
        />
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Luigi Pirandello
      </h1>
      <h4>ISBN:</h4>
      <h4>Published Year:2021</h4>
      <h4>Type:Theatre</h4>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Nobel ödüllü Luigi Pirandello’nun unutulmaz oyunlarından yapılmış,İtalyan halk geleneğine ait öğeleri doğaçlama anlatım tarzıyla işleyen, çağdaş tiyatroya özgü teknikleri yaratıcı sahne düzenlemeleriyle buluşturan Pirandello 
      </p>
    </Card>
  );
}
export default Cards;
