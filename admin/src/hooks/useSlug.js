import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const SLUG_WHOLE_DB = 'custom:db';

export const useSlug = () => {
  const { pathname } = useLocation();

  const slug = useMemo(() => {
    const matches = pathname.match(/content-manager\/(collectionType|singleType)\/([a-zA-Z0-9\-:_.]*)/);
    return matches?.[2] ? matches[2] : SLUG_WHOLE_DB;
  }, [pathname]);

  const id = useMemo(() => {
    const matches = pathname.match(/content-manager\/(collectionType|singleType)\/([a-zA-Z0-9\-:_.]*)\/([0-9].*)/);
    return matches?.[3];
  }, [pathname]);

  const isSlugWholeDb = useMemo(() => slug === SLUG_WHOLE_DB, [slug]);

  return {
    slug,
    id,
    isSlugWholeDb,
  };
};
