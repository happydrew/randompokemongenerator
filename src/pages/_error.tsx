import { NextPageContext } from 'next';

export const runtime = 'experimental-edge';

function Error({ statusCode }: { statusCode?: number }) {
  return (
    <div className="flex h-dvh items-center justify-center flex-col">
      <h1 className="text-white text-4xl">
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </h1>
    </div>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
