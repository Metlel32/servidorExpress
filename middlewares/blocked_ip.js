const blocked_ip = (req, res, next) => {
   
    const blockedIPs = ['192.168.1.13'] 


    const ip = req.socket.remoteAddres || req.ip
    console.log(`IP dectectada: ${ip}`)
    

    if (blockedIPs.includes(req.ip)) {
        return res.status(403).json({ error: "Access denied" })
    }
    next();
}
export default blocked_ip;
