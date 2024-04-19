import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

const Pagination = ({ currentPage, totalPages, onPageChange, handlePagePrev, handlePageNext }) => {
  const maxPagesToShow = window.innerWidth >= 1024 ? 5 : 3; // Jumlah maksimum halaman yang ditampilkan di sekitar currentPage

  // Tentukan halaman pertama yang akan ditampilkan
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));

  // Jika halaman pertama sudah terlalu dekat ke akhir, mundurkan ke belakang sebanyak selisihnya
  if (startPage + maxPagesToShow > totalPages) {
    startPage = Math.max(1, totalPages - maxPagesToShow + 1);
  }

  // Fungsi untuk membuat array dari halaman yang akan ditampilkan
  const pages = [...Array(Math.min(maxPagesToShow, totalPages)).keys()].map((i) => startPage + i);
  console.log(currentPage);

  return (
    <nav className="flex justify-center my-4">
      <ul className="pagination flex space-x-2 items-center">
        {currentPage == 1 ? null : (
          <button
            className="px-3 py-3 rounded-md text-dark-grey bg-white border-2 border-light-grey hover:bg-primary hover:text-white"
            onClick={handlePagePrev}
          >
            <GrFormPrevious size={23} />
          </button>
        )}
        {pages.map((page) => (
          <li key={page}>
            <button
              className={`px-5 py-3 rounded-md text-dark-grey ${
                currentPage === page
                  ? 'bg-primary text-white border-2 border-primary'
                  : 'bg-white border-2 border-light-grey hover:bg-primary hover:text-white'
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
        {currentPage == 10 ? null : ( // ubah angka 10 nanti menjadi total page
          <button
            className="px-3 py-3 rounded-md text-dark-grey bg-white border-2 border-light-grey hover:bg-primary hover:text-white"
            onClick={handlePageNext}
          >
            <GrFormNext size={23} />
          </button>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
