const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get(`/message`, function (req, res, next) {
  const { message, sender, character, location, radius } = req.query;

  const content = `\`TeleportPlayer ${location}\`
\`\`\`${sender}${sender !== character ? " (" + character + ")" : ""} ${radius}s:
${message}\`\`\``;

  axios.post(
    "https://discord.com/api/webhooks/960211818696032276/EBup9KDbCEhrOe2JOUAt_--QqDJCB6t-4xccdXpGiqEtgLkKb9vriXkDSoSyg4noJ5XO",
    {
      content: content,
    }
  );

  res.json({
    ManifestFileVersion: "000000000000",
    bIsFileData: false,
    AppID: "000000000000",
    AppNameString: "",
    BuildVersionString: "",
    LaunchExeString: "",
    LaunchCommand: "",
    PrereqIds: [],
    PrereqName: "",
    PrereqPath: "",
    PrereqArgs: "",
    FileManifestList: [],
    ChunkHashList: {},
    ChunkShaList: {},
    DataGroupList: {},
    ChunkFilesizeList: {},
    CustomFields: {},
  });
});

router.get(`/log`, function (req, res, next) {
  const { message, type } = req.query;

  const content = `Log: ${type}
${message}`;

  axios.post(
    "https://discord.com/api/webhooks/960211818696032276/EBup9KDbCEhrOe2JOUAt_--QqDJCB6t-4xccdXpGiqEtgLkKb9vriXkDSoSyg4noJ5XO",
    {
      content: content,
    }
  );

  res.json({
    ManifestFileVersion: "000000000000",
    bIsFileData: false,
    AppID: "000000000000",
    AppNameString: "",
    BuildVersionString: "",
    LaunchExeString: "",
    LaunchCommand: "",
    PrereqIds: [],
    PrereqName: "",
    PrereqPath: "",
    PrereqArgs: "",
    FileManifestList: [],
    ChunkHashList: {},
    ChunkShaList: {},
    DataGroupList: {},
    ChunkFilesizeList: {},
    CustomFields: {},
  });
});

module.exports = router;
