import * as React from "react";

interface IGameContext {
  playerName: string | null;
  gameCode: string | null;
  updateName: React.Dispatch<React.SetStateAction<string>> | null;
  updateCode: React.Dispatch<React.SetStateAction<string>> | null;
}

export const GameContext = React.createContext<IGameContext>({
  playerName: null,
  gameCode: null,
  updateName: null,
  updateCode: null,
});

const GameContextProvider = ({
  children,
  value,
}: {
  children: React.ReactElement;
  value: any;
}): React.ReactElement => {
  const [sDisplayCode, setDisplayCode] = React.useState("");
  const [sPlayerName, setPlayerName] = React.useState("");

  return (
    <GameContext.Provider
      value={{
        playerName: sPlayerName,
        gameCode: sDisplayCode,
        updateName: setPlayerName,
        updateCode: setDisplayCode,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

const userGameContext = (): IGameContext => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const context = React.useContext(GameContext);
  if (context === undefined) {
    throw new Error(
      "userGameContext must be used within a GameContextProvider"
    );
  }
  return context;
};

export { GameContextProvider, userGameContext };
