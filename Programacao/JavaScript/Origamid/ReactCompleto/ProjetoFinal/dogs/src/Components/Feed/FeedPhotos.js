import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../Hooks/useFetch';
import { PHOTOS_GET } from '../../api/Api';
import Erro from '../Helper/Erro';
import Loading from '../Helper/Loading';
import styles from './FeedPhotos.module.css';

const FeedPhotos = ({ setModalPhoto, user, page, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 3;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { resp, json } = await request(url, options);
      if (resp && resp.ok && json.length < total) setInfinite(false);
    }

    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Erro erro={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;