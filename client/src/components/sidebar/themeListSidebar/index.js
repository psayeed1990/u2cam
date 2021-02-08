import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './ThemeListSidebar.module.css';
import { apiCall } from './../../../api/';

const ThemeListSidebar = () => {
  const [lists, setLists] = useState(null);

  useEffect(() => {
    const getLists = async () => {
      const data = await apiCall('get', 'uploads');
      console.log(data.data.data);
      return setLists(data.data.data);
    };

    getLists();
  }, []);
  return (
    <div className={styles.sidebar}>
      <ul>
        {lists?.map((list) => {
          return (
            <li className={styles.themeLinks}>
              <Link href={`/editor/${list._id}`} key={list._id}>
                {list.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ThemeListSidebar;
