
(function(){
    var ZC = Ext.ns('Zenoss.component');

    function render_link(ob) {
        if (ob && ob.uid) {
            return Zenoss.render.link(ob.uid);
        } else {
            return ob;
        }
    }

    ZC.NetScreenTunnelPanel = Ext.extend(ZC.ComponentGridPanel, {
        constructor: function(config) {
            config = Ext.applyIf(config||{}, {
                componentType: 'NetScreenTunnel',
                autoExpandColumn: 'name', 
                fields:                 [
                    {
                        "name": "uid"
                    }, 
                    {
                        "name": "severity"
                    }, 
                    {
                        "name": "status"
                    }, 
                    {
                        "name": "name"
                    }, 
                    {
                        "name": "algorithm"
                    }, 
                    {
                        "name": "localGateway"
                    }, 
                    {
                        "name": "p1p2"
                    }, 
                    {
                        "name": "remoteGateway"
                    }, 
                    {
                        "name": "tunnelName"
                    }, 
                    {
                        "name": "type"
                    }, 
                    {
                        "name": "virtualSystem"
                    }, 
                    {
                        "name": "usesMonitorAttribute"
                    }, 
                    {
                        "name": "monitor"
                    }, 
                    {
                        "name": "monitored"
                    }, 
                    {
                        "name": "locking"
                    }
                ]
,
                columns:                [
                    {
                        "sortable": "true", 
                        "width": 50, 
                        "header": "Events", 
                        "renderer": Zenoss.render.severity, 
                        "id": "severity", 
                        "dataIndex": "severity"
                    }, 
                    {
                        "header": "Name", 
                        "width": 70, 
                        "sortable": "true", 
                        "id": "name", 
                        "dataIndex": "name"
                    }, 
                    {
                        "header": "Algorithm", 
                        "width": 120, 
                        "sortable": "true", 
                        "id": "algorithm", 
                        "dataIndex": "algorithm"
                    }, 
                    {
                        "header": "Local Gateway", 
                        "width": 120, 
                        "sortable": "true", 
                        "id": "localGateway", 
                        "dataIndex": "localGateway"
                    }, 
                    {
                        "header": "P1P2", 
                        "width": 120, 
                        "sortable": "true", 
                        "id": "p1p2", 
                        "dataIndex": "p1p2"
                    }, 
                    {
                        "header": "Remote Gateway", 
                        "width": 120, 
                        "sortable": "true", 
                        "id": "remoteGateway", 
                        "dataIndex": "remoteGateway"
                    }, 
                    {
                        "header": "Name", 
                        "width": 120, 
                        "sortable": "true", 
                        "id": "tunnelName", 
                        "dataIndex": "tunnelName"
                    }, 
                    {
                        "header": "Type", 
                        "width": 120, 
                        "sortable": "true", 
                        "id": "type", 
                        "dataIndex": "type"
                    }, 
                    {
                        "header": "Virtual System", 
                        "width": 120, 
                        "sortable": "true", 
                        "id": "virtualSystem", 
                        "dataIndex": "virtualSystem"
                    }, 
                    {
                        "header": "Monitored", 
                        "width": 65, 
                        "sortable": "true", 
                        "id": "monitored", 
                        "dataIndex": "monitored"
                    }, 
                    {
                        "sortable": "true", 
                        "width": 65, 
                        "header": "Locking", 
                        "renderer": Zenoss.render.locking_icons, 
                        "id": "locking", 
                        "dataIndex": "locking"
                    }
                ]

            });
            ZC.NetScreenTunnelPanel.superclass.constructor.call(this, config);
        }
    });
    
    Ext.reg('NetScreenTunnelPanel', ZC.NetScreenTunnelPanel);
    ZC.registerName('NetScreenTunnel', _t('Tunnel'), _t('Tunnels'));
    
    })();

