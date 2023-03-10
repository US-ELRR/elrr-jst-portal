import serviceMemberData from '@/data/service_member/serviceMemberData.json';
import programAdminData from '@/data/programAdmin/programAdminData.json'
import esoData from '@/data/eso/esoData.json'

export default function handler(req, res) {
  const { username, password } = req.body;
  if (username.toLowerCase().includes('servicemember') && password.includes('password')) {
    return res.status(200).json(serviceMemberData);
  }
  if (username.toLowerCase().includes('programadmin') && password.includes('password')) {
    return res.status(200).json(programAdminData);
  }
  if (username.toLowerCase().includes('eso') && password.includes('password')) {
    return res.status(200).json(esoData);
  }
    return res.status(401).json()
}
