
(function(){
    var ZC = Ext.ns('Zenoss.component');

    function render_link(ob) {
        if (ob && ob.uid) {
            return Zenoss.render.link(ob.uid);
        } else {
            return ob;
        }
    }
    
    function pass_link(ob){ 
        return ob; 
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
                        "sortable": "true", 
                        "width": 120, 
                        "header": "Algorithm", 
                        "renderer": "pass_link", 
                        "id": "algorithm", 
                        "dataIndex": "algorithm"
                    }, 
                    {
                        "sortable": "true", 
                        "width": 120, 
                        "header": "Local Gateway", 
                        "renderer": "pass_link", 
                        "id": "localGateway", 
                        "dataIndex": "localGateway"
                    }, 
                    {
                        "sortable": "true", 
                        "width": 120, 
                        "header": "P1P2", 
                        "renderer": "pass_link", 
                        "id": "p1p2", 
                        "dataIndex": "p1p2"
                    }, 
                    {
                        "sortable": "true", 
                        "width": 120, 
                        "header": "Remote Gateway", 
                        "renderer": "pass_link", 
                        "id": "remoteGateway", 
                        "dataIndex": "remoteGateway"
                    }, 
                    {
                        "sortable": "true", 
                        "width": 120, 
                        "header": "Name", 
                        "renderer": "pass_link", 
                        "id": "tunnelName", 
                        "dataIndex": "tunnelName"
                    }, 
                    {
                        "sortable": "true", 
                        "width": 120, 
                        "header": "Type", 
                        "renderer": "pass_link", 
                        "id": "type", 
                        "dataIndex": "type"
                    }, 
                    {
                        "sortable": "true", 
                        "width": 120, 
                        "header": "Virtual System", 
                        "renderer": "pass_link", 
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

