import { useEffect, useState } from "react";

const Home = () => {
  const [getDataUser, setDataUser] = useState();
  const [getStatsUser, setStatsUser] = useState();
  useEffect(() => {
    fetch("https://api.chess.com/pub/player/hikaru")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setDataUser(data);
      });
    fetch("https://api.chess.com/pub/player/hikaru/stats")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setStatsUser(data);
      });
  }, []);

  console.log(getStatsUser);
  return (
    <>
      {getDataUser && getStatsUser ? (
        <>
          {" "}
          <div className="min-h-screen bg-white flex justify-center items-center px-16 gap-5">
            <div className="min-h-screen flex justify-center items-center w-full ">
              <div>lkjadk</div>
            </div>
            <div className="min-h-screen flex justify-center items-center w-fit ">
              <div className="bg-base-100 px-7 rounded-lg">
                <div className="flex w-full items-center justify-center">
                  <img src={getDataUser.avatar} alt="" className="w-full" />{" "}
                  <img
                    src={
                      getDataUser.league == "Wood"
                        ? `https://www.chess.com/bundles/web/images/leagues/badges/wood.svg`
                        : getDataUser.league == "Stone"
                        ? `https://www.chess.com/bundles/web/images/leagues/badges/stone.svg`
                        : getDataUser.league == "Bronze"
                        ? `https://www.chess.com/bundles/web/images/leagues/badges/bronze.svg`
                        : getDataUser.league == "Silver"
                        ? `https://www.chess.com/bundles/web/images/leagues/badges/silver.svg`
                        : getDataUser.league == "Crystal"
                        ? `https://www.chess.com/bundles/web/images/leagues/badges/crystal.svg`
                        : getDataUser.league == "Elite"
                        ? `https://www.chess.com/bundles/web/images/leagues/badges/elite.svg`
                        : getDataUser.league == "Champion"
                        ? `https://www.chess.com/bundles/web/images/leagues/badges/champion.svg`
                        : `https://www.chess.com/bundles/web/images/leagues/badges/legend.svg`
                    }
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <p className="text-white font-bold mt-5">
                  {getDataUser.username}
                </p>
                <div className="p-2">
                  <div className="flex justify-center items-center gap-5">
                    <img
                      src="https://img.icons8.com/material-rounded/100/FFFFFF/stopwatch.png"
                      alt=""
                      className="w-14"
                    />
                    <p className="text-white font-bold text-xl w-full text-center">
                      {getStatsUser.chess_rapid.last.rating}
                    </p>
                  </div>
                </div>
                <div className="p-2">
                  <div className="flex justify-center items-center gap-5">
                    <img
                      src="https://img.icons8.com/glyph-neue/64/FFFFFF/lightning-bolt.png"
                      alt=""
                      className="w-14"
                    />
                    <p className="text-white font-bold text-xl w-full text-center">
                      {getStatsUser.chess_blitz.last.rating}
                    </p>
                  </div>
                </div>
                {getStatsUser.chess_bullet ? (
                  <div className="p-2">
                    <div className="flex justify-center items-center gap-5">
                      <img
                        src="https://img.icons8.com/ios-filled/50/FFFFFF/bullet.png"
                        alt=""
                        className="w-14"
                      />
                      <p className="text-white font-bold text-xl w-full text-center">
                        {getStatsUser.chess_bullet.last.rating}
                      </p>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Home;
