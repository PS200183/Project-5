@ECHO OFF
REM Command file om de startcode voor een React Native app te maken

REM Vraag of er een update van Expo uitgevoerd moet worden
ECHO Wil je een update uitvoeren van Expo? (y/n)
SET /p bijwerken="y/n: "

IF "%bijwerken%"=="y" (
ECHO Update wordt uitgevoerd
ECHO NB:
ECHO - Bij mij bleef de update update een aantal keer 'hangen'. 
ECHO   Op internet vond ik een 'work-around' door een oudere versie van NPM 
ECHO   te gebruiken met het commando: 'npm install -g npm@6'.
ECHO   Heb je problemen, probeer dit dan ook. Of zoek een andere oplossing op Internet.

CALL npm install --g expo-cli
) ELSE (
ECHO Update wordt niet uitgevoerd
)

REM Als geen naam van de applicatie is opgegeven, vraag er dan om
SET naam=%~1
IF "%naam%"=="" (
ECHO Hoe heet je applicatie
set /p naam="Naam: "
)

ECHO Applicatie %naam% wordt gemaakt
CALL expo init %naam%

CD %naam%

ECHO Downloaden van react navigation 
ECHO - @react-navigation/native
CALL npm install @react-navigation/native > makeitLog.txt
ECHO - react-native-screens react-native-safe-area-context
CALL expo install react-native-screens react-native-safe-area-context >> makeitLog.txt
ECHO - @react-navigation/stack
CALL npm install @react-navigation/stack >> makeitLog.txt
ECHO - react-native-gesture-handler
CALL expo install react-native-gesture-handler >> makeitLog.txt
ECHO - @react-navigation/material-bottom-tabs react-native-paper react-native-vector-icons
CALL npm install @react-navigation/material-bottom-tabs react-native-paper react-native-vector-icons >> makeitLog.txt

ECHO Basiscomponenten klaarzetten

MD components
DEL App.js
CD ..
ECHO - App.js
COPY makeitApp.txt %naam%\App.js >> makeitLog.txt

ECHO - Components\HomeScreen.js
COPY makeitHome.txt %naam%\Components\HomeScreen.js >> makeitLog.txt

ECHO - Components\ListScreen.js
COPY makeitList.txt %naam%\Components\ListScreen.js >> makeitLog.txt

ECHO - Components\DetailsScreen.js
COPY makeitDetails.txt %naam%\Components\DetailsScreen.js >> makeitLog.txt

ECHO Project %naam% met navigatie is gemaakt
ECHO De output is geschreven naar file makeitLog.txt 
SET/p wacht="Druk op Enter..."
:stop
ECHO ON
