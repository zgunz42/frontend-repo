import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';

const withAuth = (WrappedComponent: React.ComponentType) => {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    const router = useRouter();
    const user = useSelector((state: RootState) => state.user);

    useEffect(() => {
      if (!user.data) {
        router.replace('/login'); // Redirect to login page if not authenticated
      }
    }, [user, router]);

    if (!user) {
      return null; // Render nothing while redirecting
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
