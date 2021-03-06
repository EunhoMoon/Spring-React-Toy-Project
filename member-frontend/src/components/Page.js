import { Link } from 'react-router-dom';

const Page = ({ pNum, totalPage, link }) => {
  let items = [];

  for (let i = 1; i <= totalPage; i++) {
    const isActive = i == pNum ? 'active disable' : '';
    items.push(
      <li className={'page-item  ' + isActive} key={i} onClick={() => {}}>
        <Link className={'page-link'} to={link + i}>
          {i}
        </Link>
      </li>,
    );
  }

  return (
    <div>
      <ul className="pagination">{items}</ul>
    </div>
  );
};

export default Page;
