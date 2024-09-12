import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../state/store";
import Pagination from "../components/Pagination";
import TrackCard from "../components/Tracks/Track";
import { getTracks } from "../state/track/actions";
import { changePage, resetTracks } from "../state/track/trackReducer";

const RenderTracks = (props) => {
  return (
    <div
      onScroll={props.onScroll}
      ref={props.listInnerRef}
      style={{ height: "100vh", overflowY: "auto" }}
    >
      {props.dataList.length === 0 ? (
        <div className=" w-full py-5 rounded-lg mb-32 bg-[#10141C] bg-opacity-50 md:backdrop:mb-12 ">
          <p className=" font-medium text-[13px] text-center ">
            No information available 👋
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5  gap-y-10">
          {props.dataList.map((track, index) => (
            <TrackCard key={index} track={track} />
          ))}
        </div>
      )}
    </div>
  );
};

const Tracks = () => {
  const dispatch = useDispatch();
  const tracks = useSelector((state: AppState) => state.tracks.data);
  const pagination = useSelector((state: AppState) => state.tracks.pagination);

  useEffect(() => {
    dispatch(resetTracks());
  }, [dispatch]);

  return (
    <Pagination
      reachMaxLimit={pagination.reachMaxLimit}
      dataList={tracks}
      onFetchData={() =>
        dispatch(
          getTracks({
            nextCursor: pagination.nextCursor,
          })
        )
      }
      currentCursor={pagination.currentCursor}
      nextCursor={pagination.nextCursor}
      onSetCurrentCursor={() => dispatch(changePage())}
    >
      <RenderTracks />
    </Pagination>
  );
};

export default Tracks;
