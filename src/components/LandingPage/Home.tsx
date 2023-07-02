import React, { useEffect, useState } from 'react';
import { Button, Carousel } from 'antd';

const initItems = [
  {
    key: '1',
    title: 'Precisando realizar uma consultoria tributária?',
    content:
      'Venha ser parceiro de quem entende do assunto, temos uma equipe especializada para te ajudar.',
    style: 'font-size: 30px;', // Defina o tamanho da fonte usando CSS
  },
  {
    key: '2',
    title: 'Tem algumas dúvidas sobre retenção de serviços?',
    content:
      'Consulte nosso material das principais dúvidas encontradas a respeito de retenção de serviços. Venha conferir.',
    style: 'font-size: 25px;', // Defina o tamanho da fonte usando CSS
  },
];

export const Home = () => {
  const [items, setItems] = useState(initItems);

  useEffect(() => {
    setItems(initItems);
  }, [items]);

  return (
    <div id="home" className="homeBlock">
      <Carousel autoplay>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="btnHolder">
                  <Button type="primary" size="large">
                    Faça uma consulta tributária
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
