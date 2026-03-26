 const getOtherMembers = (members, userId) => {
  return members.find((member) => member._id.toString() !== userId.toString());
};
const getBase64 = (file) => {
  return `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;
};
module.exports = { getOtherMembers, getBase64 };

