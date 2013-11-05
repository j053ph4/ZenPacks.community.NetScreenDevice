from ZenPacks.community.ConstructionKit.BasicDefinition import *
from ZenPacks.community.ConstructionKit.Construct import *

NetScreenDefinition = type('NetScreenDefinition', (BasicDefinition,), {
        'version' : Version(1, 1, 0),
        'zenpackbase': "NetScreenDevice",
        'component' : 'NetScreenTunnel',
        'componentData' : {
                          'singular': 'Tunnel',
                          'plural': 'Tunnels',
                          'properties': { 
                                        'tunnelName' : addProperty('Name','Basic',optional='false'),
                                        'virtualSystem' : addProperty('Virtual System','Basic',optional='false'),
                                        'localGateway' : addProperty('Local Gateway','Basic',optional='false'),
                                        'remoteGateway' : addProperty('Remote Gateway','Basic',optional='false'),
                                        'type' : addProperty('Type','Basic',optional='false'),
                                        'algorithm' : addProperty('Algorithm','Basic',optional='false'),
                                        'p1p2' : addProperty('P1P2','Basic',optional='false'),
                                        },
                          },
        }
)


