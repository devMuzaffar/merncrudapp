import Button from "react-bootstrap/Button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import timelineData from "../../../list/timelineData";

const Details = ({data}) => {

  const profileName = data[1]?.text;
  const profileWork = data[4]?.text;

  return (
    <div className="w-full flex flex-col gap-10">
      {/* Basic Info - Edit Profile */}
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl">{profileName}</h2>
          <h3 className="font-medium text-blue-600">{profileWork}</h3>
          <p className="text-gray-500 text-sm">
            RANKINGS: <span className="text-black font-bold">1/10</span>
          </p>
        </div>
        <div className="mt-2">
          <Button variant="primary">Edit Profile</Button>
        </div>
      </div>

      {/* Tab Contents */}
      <div className="h-full">
        <Tabs className="font-medium">
          {/* About Tab */}
          <Tab eventKey="about" title="About">
            <div className="space-y-6 px-2 pt-4">
            {data?.map(({title, text}, index) => (
              <div
                key={index}
                className="flex justify-between items-center h-full"
              >
                <h2>{title === '_id' ? "user ID" : title}</h2>
                <p className="font-medium text-blue-600">{text}</p>
              </div>
            ))}
            </div>
          </Tab>

          {/* Timeline Tab */}
          <Tab eventKey="timeline" title="Timeline">
          <div className="space-y-6 px-2 pt-4">
            {timelineData.map(({ title, text }, index) => (
              <div
                key={index}
                className="flex justify-between items-center h-full"
              >
                <h2>{title}</h2>
                <p className="font-medium text-blue-600">{text}</p>
              </div>
            ))}
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Details;
