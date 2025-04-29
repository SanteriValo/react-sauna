import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="item-block"
    speed={2}
    width={280}
    height={458}
    viewBox="0 0 280 458"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="17" y="16" rx="6" ry="6" width="183" height="24" />
    <rect x="36" y="58" rx="10" ry="10" width="145" height="244" />
    <rect x="-1" y="326" rx="10" ry="10" width="225" height="71" />
    <rect x="1" y="414" rx="6" ry="6" width="103" height="24" />
    <rect x="158" y="414" rx="6" ry="6" width="68" height="25" />
    <rect x="198" y="454" rx="0" ry="0" width="5" height="0" />
  </ContentLoader>
);

export default Skeleton;
