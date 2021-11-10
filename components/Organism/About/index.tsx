import React from 'react';
import HeaderPhoto from '../General/HeaderPhoto';
import Image from 'next/image';

export default function AboutComponent() {
  return (
    <>
      <main className='justify-center align-middle p-5 md:p-10 xl:px-40'>
        <section>
          <div className='mb-8 md:mb-12 font-bold flex flex-col'>
            <span className='text-3xl'>About</span>
            <span className='text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 dark:from-pink-500 dark:to-yellow-500'>
              Muhammad Ihsan
            </span>
          </div>
          <div className='float-right md:ml-2 md:mb-2 w-40 sm:w-72 rounded-full bg-gradient-to-r from-green-400 to-blue-500 dark:from-pink-500 dark:to-yellow-500'>
            <img
              className='rounded-full'
              src='/image/Avatar.png'
              width='300'
              height='300'
            />
          </div>
          <article className='text-lg'>
            <p className='mb-8'>
              Halo! Perkenalkan saya Ihsan lulusan Institut Pertanian Bogor,
              saya menjadi seorang web development dimulai pada bulan Februari
              2021. Pada saat ini memutuskan untuk berpindah karir dari berbagai
              role pekerjaan mulai dari sales, procurement sampai ke digital
              marketing di salah satu UMKM di Bogor selama 2 tahun. Pandemi
              memaksa saya untuk survive lebih, oleh karena itu saya memutuskan
              untuk belajar menjadi seorang web developer melalui bootcamp dan
              berbagai course udemy.
            </p>
            <p className='mb-8'>
              Frontend development menjadi pilihan saya, dikarenakan saya lebih
              menyukai hal yang bersifat visual seperti design UI, design
              Engineer dan lainnya. Banyak teknologi yang dapat dipelajari di
              Frontend Development, sehingga membuat saya bersemangat untuk
              mempelajari banyak hal yang saya bisa. Belajar dan terus berlatih
              membuat saya menjadi lebih baik. Saya juga sedikit bisa dan
              mengerti di Backend development karena pembelajaran pada saat
              bootcamp.
            </p>
            <p className='mb-8'>
              Dalam Website ini, saya mendedikasikan pengetahuan saya dibidang
              web developer, UI/UX dan lainnya yang saya ketahui melalui blog
              dan juga project yang sudah saya kerjakan. Saya percaya bahwa
              dengan memberikan informasi atau ilmu yang saya miliki, membuat
              saya tambah bertumbuh mengulang apa yang saya ketahui menjadi
              lebih baik.
            </p>
          </article>
        </section>

        <section>
          <h2 className='text-3xl font-bold mb-2'>Contact</h2>
          <article>
            <p className='mb-8 text-lg'>
              Terimakasih telah mengunjungi website saya, jika ada pertanyaan
              jangan sungkan untuk menghubungi saya di social media yang ada di
              footer. 😊
            </p>
          </article>
        </section>
      </main>
    </>
  );
}
