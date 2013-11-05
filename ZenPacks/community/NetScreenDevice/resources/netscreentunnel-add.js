
(function() {
        
            function getPageContext() {
                return Zenoss.env.device_uid || Zenoss.env.PARENT_CONTEXT;
            }
        
            Ext.ComponentMgr.onAvailable('component-add-menu', function(config) {
                var menuButton = Ext.getCmp('component-add-menu');
                menuButton.menuItems.push({
                    xtype: 'menuitem',
                    text: _t('Add Tunnel') + '...',
                    hidden: Zenoss.Security.doesNotHavePermission('Manage Device'),
                    handler: function() {
                        var win = new Zenoss.dialog.CloseDialog({
                            width: 300,
                            title: _t('Add Tunnel'),
                            items: [{
                                xtype: 'form',
                                buttonAlign: 'left',
                                monitorValid: true,
                                labelAlign: 'top',
                                footerStyle: 'padding-left: 0',
                                border: false,
                                items:                         [
                            {
                                fieldLabel: 'Algorithm', 
                                allowBlank: 'false', 
                                name: 'algorithm', 
                                width: 260, 
                                id: 'algorithmField', 
                                xtype: 'textfield'
                            }, 
                            {
                                fieldLabel: 'Local Gateway', 
                                allowBlank: 'false', 
                                name: 'localGateway', 
                                width: 260, 
                                id: 'localGatewayField', 
                                xtype: 'textfield'
                            }, 
                            {
                                fieldLabel: 'P1P2', 
                                allowBlank: 'false', 
                                name: 'p1p2', 
                                width: 260, 
                                id: 'p1p2Field', 
                                xtype: 'textfield'
                            }, 
                            {
                                fieldLabel: 'Remote Gateway', 
                                allowBlank: 'false', 
                                name: 'remoteGateway', 
                                width: 260, 
                                id: 'remoteGatewayField', 
                                xtype: 'textfield'
                            }, 
                            {
                                fieldLabel: 'Name', 
                                allowBlank: 'false', 
                                name: 'tunnelName', 
                                width: 260, 
                                id: 'tunnelNameField', 
                                xtype: 'textfield'
                            }, 
                            {
                                fieldLabel: 'Type', 
                                allowBlank: 'false', 
                                name: 'type', 
                                width: 260, 
                                id: 'typeField', 
                                xtype: 'textfield'
                            }, 
                            {
                                fieldLabel: 'Virtual System', 
                                allowBlank: 'false', 
                                name: 'virtualSystem', 
                                width: 260, 
                                id: 'virtualSystemField', 
                                xtype: 'textfield'
                            }
                        ]

                                ,
                                buttons: [{
                                    xtype: 'DialogButton',
                                    id: 'NetScreenDevice-submit',
                                    text: _t('Add'),
                                    formBind: true,
                                    handler: function(b) {
                                        var form = b.ownerCt.ownerCt.getForm();
                                        var opts = form.getFieldValues();
                                        Zenoss.remote.NetScreenDeviceRouter.addNetScreenTunnelRouter(opts,
                                        function(response) {
                                            if (response.success) {
                                                new Zenoss.dialog.SimpleMessageDialog({
                                                    title: _t('Tunnel Added'),
                                                    message: response.msg,
                                                    buttons: [{
                                                        xtype: 'DialogButton',
                                                        text: _t('OK'),
                                                        handler: function() { 
                                                            window.top.location.reload();
                                                            }
                                                        }]
                                                }).show();
                                            }
                                            else {
                                                new Zenoss.dialog.SimpleMessageDialog({
                                                    message: response.msg,
                                                    buttons: [{
                                                        xtype: 'DialogButton',
                                                        text: _t('OK'),
                                                        handler: function() { 
                                                            window.top.location.reload();
                                                            }
                                                        }]
                                                }).show();
                                            }
                                        });
                                    }
                                }, Zenoss.dialog.CANCEL]
                            }]
                        });
                        win.show();
                    }
                });
            });
        }()
);

