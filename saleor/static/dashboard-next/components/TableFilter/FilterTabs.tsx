import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import * as React from "react";

const styles = (theme: Theme) =>
  createStyles({
    tabsRoot: {
      borderBottom: "1px solid #e0e0e0",
      paddingLeft: `${theme.spacing.unit * 3}px`
    }
  });

interface FilterTabsProps extends WithStyles<typeof styles> {
  children?: React.ReactNode;
  currentTab: number;
}

export const FilterTabs = withStyles(styles, { name: "FilterTabs" })(
  ({ classes, children, currentTab }: FilterTabsProps) => (
    <Tabs
      className={classes.tabsRoot}
      value={currentTab}
      indicatorColor={"primary"}
    >
      {children}
    </Tabs>
  )
);

export default FilterTabs;
