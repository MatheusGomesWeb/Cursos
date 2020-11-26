import React from 'react';
import { useParams } from 'react-router-dom';
import { PHOTO_GET } from '../../api/Api';
import Erro from '../Helper/Erro';
import Head from '../Helper/Head';
import Loading from '../Helper/Loading';
import useFetch from '../Hooks/useFetch';
import PhotoContent from '../Photo/PhotoContent';

const Photo = () => {
  const { id } = useParams();

  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Erro error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent data={data} single={true} />
      </section>
    );
  else return null;
};

export default Photo;
