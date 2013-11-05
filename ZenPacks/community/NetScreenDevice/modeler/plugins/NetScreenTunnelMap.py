from Products.DataCollector.plugins.CollectorPlugin import SnmpPlugin, GetMap, GetTableMap
from Products.DataCollector.plugins.DataMaps import ObjectMap
from ZenPacks.community.NetScreenDevice.Definition import *
import re

class NetScreenTunnelMap(SnmpPlugin):
    ''''''
    compname = "os"
    constr = Construct(NetScreenDefinition)
    relname = constr.relname
    modname = constr.zenpackComponentModule
    baseid = constr.baseid

    tunnelTypeMap = {
        0:'reserved',
        1:'ISAKMP',
        2:'IPsec-AH',
        3:'IPsec-ESP',
        4:'IPComp',
        }

    ahAlgMap = {
        0:'reserved',
        2:'AH-MD5',
        3:'AH-SHA',
        4:'AH-DES',
        }

    snmpGetTableMaps = (
        GetTableMap(
            'nsVpnMonTable', '.1.3.6.1.4.1.3224.4.1.1.1', {
                '.4': 'vpnName',
                '.5': 'virtualSystem',
                '.6': 'tunnelType',
                '.9': 'ahAlg',
                '.13':'rmtGwIp',
                '.15':'myGwIp',
                }
            ),
        )

    def process(self, device, results, log):
        log.info("Modeler %s processing data for device %s",
            self.name(), device.id)
        
        getdata, tabledata = results
        vpntable = tabledata.get("nsVpnMonTable")
        if not vpntable: return
        maps = []
        rm = self.relMap()
        for snmpindex, data in vpntable.items():
            om = self.objectMap(data)
            om.snmpindex = snmpindex
            name = "%s_%s" % (self.baseid, re.sub('[^A-Za-z0-9]+', '', om.vpnName))
            om.id = self.prepId(name)
            om.tunnelName = om.vpnName
            om.virtualSystem = om.virtualSystem
            om.localGateway = om.myGwIp
            om.remoteGateway = om.rmtGwIp
            om.type = self.tunnelTypeMap.get(om.tunnelType, "Unknown")
            om.algorithm = self.ahAlgMap.get(om.ahAlg, "Unknown")
            om.p1p2 = om.vpnName
            rm.append(om)
        maps.append(rm)
        return maps

