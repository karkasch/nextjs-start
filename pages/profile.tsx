import type { NextPage } from 'next';
import { withSessionSsr } from '../lib/withSession';

// You may need the next line in some situations
// import * as IronSession from "iron-session";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
      admin?: boolean;
      name: string;
    };
  }
}

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    const user = req.session.user;

    console.log('USER', user);

    // if (user?.admin !== true) {
    //   return {
    //     notFound: true,
    //   };
    // }

    return {
      props: {
        user: user || null,
      },
    };
  },
);

const Profile: NextPage = ({ user }) => {
  console.log('Profile page', user);
  return (
    <div>
      Profile here: {JSON.stringify(user)}
      
    </div>
  )
}

export default Profile;
