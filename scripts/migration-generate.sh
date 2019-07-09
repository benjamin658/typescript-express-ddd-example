cat > ./sequelize/migrations/$(date +"%Y%m%d%H%M%S")-$1.ts << EOF
/* tslint:disable:variable-name */
import {
  QueryInterface,
  DataTypes,
  Sequelize,
} from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
  },

  down: async (queryInterface: QueryInterface) => {
  },
};
EOF